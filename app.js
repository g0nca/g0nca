/* =========================================================
   app.js — lógica do menu. Os dados vivem em menu.js (MENU).
   ========================================================= */
(function () {
  "use strict";

  var IDIOMAS = ["pt", "en", "es", "fr"];
  var FILTROS = ["vegetariano", "sem_gluten", "picante"];

  var estado = {
    lang: detetarIdioma(),
    filtros: [] // tags ativas; um item só aparece se tiver todas
  };

  /* ---------- idioma ---------- */

  function detetarIdioma() {
    var params = new URLSearchParams(location.search);
    var deUrl = params.get("lang");
    if (deUrl && IDIOMAS.indexOf(deUrl) !== -1) return deUrl;
    var guardado = null;
    try { guardado = localStorage.getItem("bamboo-lang"); } catch (e) {}
    if (guardado && IDIOMAS.indexOf(guardado) !== -1) return guardado;
    var nav = (navigator.language || "pt").slice(0, 2).toLowerCase();
    return IDIOMAS.indexOf(nav) !== -1 ? nav : "pt";
  }

  function mudarIdioma(lang) {
    estado.lang = lang;
    try { localStorage.setItem("bamboo-lang", lang); } catch (e) {}
    render();
  }

  function t(obj) { return obj[estado.lang] || obj.pt; }

  /* ---------- utilitários ---------- */

  function preco(n) {
    return n.toFixed(2).replace(".", ",") + " €";
  }

  function el(tag, attrs, filhos) {
    var e = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (attrs[k] === null || attrs[k] === undefined) continue;
        if (k === "text") e.textContent = attrs[k];
        else e.setAttribute(k, attrs[k]);
      }
    }
    (filhos || []).forEach(function (f) { if (f) e.appendChild(f); });
    return e;
  }

  function itemVisivel(item) {
    return estado.filtros.every(function (f) {
      return (item.tags || []).indexOf(f) !== -1;
    });
  }

  /* ---------- construção de um item ---------- */

  function construirItem(item, opcoes) {
    opcoes = opcoes || {};
    var linha = el("div", { class: "item-linha" }, [
      el("h3", { class: "item-nome", text: t(item.nome) }),
      el("span", { class: "item-leader", "aria-hidden": "true" }),
      el("span", { class: "item-preco", text: preco(item.preco) })
    ]);

    var filhos = [];
    if (opcoes.dia !== undefined) {
      filhos.push(el("p", { class: "item-dia", text: t(MENU.ui.dias)[opcoes.dia] }));
    }
    filhos.push(linha);
    if (item.descricao) {
      filhos.push(el("p", { class: "item-descricao", text: t(item.descricao) }));
    }
    filhos.push(construirMeta(item));

    var art = el("article", { class: "item" }, filhos);
    if (!itemVisivel(item)) art.setAttribute("data-escondido", "");
    return art;
  }

  function construirMeta(item) {
    var partes = [];
    (item.tags || []).forEach(function (tag) {
      if (!MENU.tags[tag]) return;
      partes.push(el("span", {
        class: "tag" + (tag === "favorito" ? " tag-favorito" : ""),
        text: t(MENU.tags[tag])
      }));
    });
    if (item.alergenios && item.alergenios.length) {
      var nomes = item.alergenios.map(function (c) { return t(MENU.alergenios[c]); }).join(", ");
      partes.push(el("span", {
        class: "item-alergenios",
        text: t(MENU.ui.alergenios) + " " + item.alergenios.join("·"),
        title: nomes,
        "aria-label": t(MENU.ui.alergenios) + ": " + nomes
      }));
    }
    if (!partes.length) return null;
    return el("p", { class: "item-meta" }, partes);
  }

  /* ---------- secção das diárias (ardósia) ---------- */

  function construirDiarias(cat) {
    var hoje = new Date().getDay();
    var pratoHoje = null;
    var outros = [];
    // mantém a ordem seg→dom a partir de hoje
    cat.itens.forEach(function (item) {
      if (item.dia === hoje) pratoHoje = item;
    });
    for (var i = 1; i <= 6; i++) {
      var dia = (hoje + i) % 7;
      cat.itens.forEach(function (item) {
        if (item.dia === dia) outros.push(item);
      });
    }

    var seccao = el("section", { id: cat.id, "aria-label": t(cat.nome) });
    seccao.appendChild(el("h2", { class: "categoria-titulo", text: t(cat.nome) }));
    seccao.appendChild(el("hr", { class: "veio", "aria-hidden": "true" }));

    var temVisiveis = false;

    if (pratoHoje && itemVisivel(pratoHoje)) {
      temVisiveis = true;
      var meta = construirMeta(pratoHoje);
      var ardosia = el("div", { class: "ardosia" }, [
        el("p", { class: "ardosia-rotulo", text: t(MENU.ui.pratoDoDia) }),
        el("p", {
          class: "ardosia-dia",
          text: t(MENU.ui.dias)[hoje] + " · " + t(MENU.ui.hoje)
        }),
        el("p", { class: "ardosia-prato", text: t(pratoHoje.nome) }),
        el("p", { class: "ardosia-descricao", text: t(pratoHoje.descricao) }),
        meta,
        el("strong", { class: "ardosia-preco", text: preco(pratoHoje.preco) })
      ]);
      seccao.appendChild(ardosia);
    }

    var detalhes = el("details", { class: "outros-dias" }, [
      el("summary", { text: t(MENU.ui.outrosDias) })
    ]);
    var outrosVisiveis = false;
    outros.forEach(function (item) {
      detalhes.appendChild(construirItem(item, { dia: item.dia }));
      if (itemVisivel(item)) outrosVisiveis = true;
    });
    if (outrosVisiveis) {
      temVisiveis = true;
      seccao.appendChild(detalhes);
    }
    if (!temVisiveis) seccao.setAttribute("data-escondido", "");
    return seccao;
  }

  /* ---------- secções normais ---------- */

  function construirSeccao(cat) {
    var seccao = el("section", { id: cat.id, "aria-label": t(cat.nome) });
    seccao.appendChild(el("h2", { class: "categoria-titulo", text: t(cat.nome) }));
    seccao.appendChild(el("hr", { class: "veio", "aria-hidden": "true" }));

    var temVisiveis = false;

    if (cat.subgrupos) {
      cat.subgrupos.forEach(function (sub) {
        var grupo = el("div", { class: "subgrupo" }, [
          el("h3", { class: "subgrupo-titulo", text: t(sub.nome) })
        ]);
        var visiveisNoGrupo = false;
        sub.itens.forEach(function (item) {
          grupo.appendChild(construirItem(item));
          if (itemVisivel(item)) { visiveisNoGrupo = true; temVisiveis = true; }
        });
        if (!visiveisNoGrupo) grupo.setAttribute("data-escondido", "");
        seccao.appendChild(grupo);
      });
    } else {
      cat.itens.forEach(function (item) {
        seccao.appendChild(construirItem(item));
        if (itemVisivel(item)) temVisiveis = true;
      });
    }

    if (!temVisiveis) seccao.setAttribute("data-escondido", "");
    return seccao;
  }

  /* ---------- filtros ---------- */

  function construirFiltros() {
    var barra = el("div", {
      class: "filtros",
      role: "group",
      "aria-label": t(MENU.ui.filtros)
    });
    FILTROS.forEach(function (tag) {
      var btn = el("button", {
        type: "button",
        text: t(MENU.tags[tag]),
        "aria-pressed": estado.filtros.indexOf(tag) !== -1 ? "true" : "false"
      });
      btn.addEventListener("click", function () {
        var i = estado.filtros.indexOf(tag);
        if (i === -1) estado.filtros.push(tag);
        else estado.filtros.splice(i, 1);
        render();
      });
      barra.appendChild(btn);
    });
    return barra;
  }

  /* ---------- navegação de categorias ---------- */

  function construirNav() {
    var nav = document.getElementById("categorias");
    nav.textContent = "";
    nav.setAttribute("aria-label", t(MENU.ui.categorias));
    MENU.categorias.forEach(function (cat) {
      var a = el("a", { href: "#" + cat.id, text: t(cat.nome) });
      nav.appendChild(a);
    });
  }

  function construirIdiomas() {
    var nav = document.getElementById("idiomas");
    nav.textContent = "";
    nav.setAttribute("aria-label", t(MENU.ui.idioma));
    IDIOMAS.forEach(function (lang) {
      var btn = el("button", {
        type: "button",
        lang: lang,
        text: lang.toUpperCase(),
        "aria-pressed": lang === estado.lang ? "true" : "false"
      });
      btn.addEventListener("click", function () { mudarIdioma(lang); });
      nav.appendChild(btn);
    });
  }

  /* ---------- rodapé ---------- */

  function construirRodape() {
    var r = MENU.restaurante;
    var ui = MENU.ui;

    var info = document.getElementById("rodape-info");
    info.textContent = "";
    var sep1 = el("span", { class: "sep", "aria-hidden": "true", text: "·" });
    var sep2 = sep1.cloneNode(true);
    var sep3 = sep1.cloneNode(true);
    [
      el("span", { text: r.horario }),
      sep1,
      el("a", { href: r.mapsUrl, rel: "noopener", text: r.morada }),
      sep2,
      el("a", { href: "tel:" + r.telefone.replace(/\s/g, ""), text: r.telefone }),
      sep3,
      el("span", { text: t(ui.rodape.wifi) + ": " + r.wifi })
    ].forEach(function (n) { info.appendChild(n); });

    var redes = document.getElementById("rodape-redes");
    redes.textContent = "";
    redes.appendChild(el("a", { href: r.instagram, rel: "noopener", text: "Instagram" }));
    redes.appendChild(el("span", { class: "sep", "aria-hidden": "true", text: "·" }));
    redes.appendChild(el("a", { href: r.facebook, rel: "noopener", text: "Facebook" }));

    var legenda = document.getElementById("alergenios-legenda");
    var aberta = legenda.open;
    legenda.textContent = "";
    legenda.open = aberta;
    legenda.appendChild(el("summary", { text: t(ui.alergenios) }));
    var lista = el("ol");
    for (var c = 1; c <= 14; c++) {
      lista.appendChild(el("li", { value: c, text: t(MENU.alergenios[c]) }));
    }
    legenda.appendChild(lista);
    legenda.appendChild(el("p", { class: "nota", text: t(ui.alergeniosNota) }));

    document.getElementById("rodape-nota").textContent = t(ui.ivaNota);
  }

  /* ---------- zona (?zona=esplanada|interior|bar) ---------- */

  function construirZona() {
    var zona = new URLSearchParams(location.search).get("zona");
    var elZona = document.getElementById("zona");
    if (zona && MENU.ui.zonas[zona]) {
      elZona.textContent = t(MENU.ui.zonas[zona]);
      elZona.hidden = false;
    } else {
      elZona.hidden = true;
    }
  }

  /* ---------- scrollspy ---------- */

  var observador = null;

  function ativarScrollspy() {
    if (observador) observador.disconnect();
    if (!("IntersectionObserver" in window)) return;
    var ligacoes = document.querySelectorAll(".categorias a");
    var mapa = {};
    ligacoes.forEach(function (a) { mapa[a.getAttribute("href").slice(1)] = a; });

    observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (!entrada.isIntersecting) return;
        ligacoes.forEach(function (a) { a.removeAttribute("aria-current"); });
        var ativa = mapa[entrada.target.id];
        if (ativa) {
          ativa.setAttribute("aria-current", "true");
          ativa.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "auto" });
        }
      });
    }, { rootMargin: "-15% 0px -70% 0px" });

    document.querySelectorAll("main section[id]").forEach(function (s) {
      observador.observe(s);
    });
  }

  /* ---------- botão voltar ao topo ---------- */

  function ativarTopo() {
    var btn = document.getElementById("topo");
    btn.setAttribute("aria-label", t(MENU.ui.voltarTopo));
    btn.title = t(MENU.ui.voltarTopo);
    btn.addEventListener("click", function () {
      var suave = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: suave ? "smooth" : "auto" });
    });
    window.addEventListener("scroll", function () {
      btn.hidden = window.scrollY < window.innerHeight;
    }, { passive: true });
  }

  /* ---------- impressão: abrir todos os <details> ---------- */

  var abertosAntesDeImprimir = [];
  window.addEventListener("beforeprint", function () {
    abertosAntesDeImprimir = [];
    document.querySelectorAll("details").forEach(function (d) {
      abertosAntesDeImprimir.push(d.open);
      d.open = true;
    });
  });
  window.addEventListener("afterprint", function () {
    document.querySelectorAll("details").forEach(function (d, i) {
      d.open = abertosAntesDeImprimir[i];
    });
  });

  /* ---------- render principal ---------- */

  function render() {
    document.documentElement.lang = estado.lang;

    construirIdiomas();
    construirNav();
    construirZona();

    var main = document.getElementById("menu");
    // preserva o noscript, limpa o resto
    Array.prototype.slice.call(main.children).forEach(function (filho) {
      if (filho.tagName !== "NOSCRIPT") main.removeChild(filho);
    });

    main.appendChild(construirFiltros());

    var algumaVisivel = false;
    MENU.categorias.forEach(function (cat) {
      var seccao = cat.id === "diarias" ? construirDiarias(cat) : construirSeccao(cat);
      if (!seccao.hasAttribute("data-escondido")) algumaVisivel = true;
      main.appendChild(seccao);
    });
    if (!algumaVisivel) {
      main.appendChild(el("p", { class: "sem-resultados", text: t(MENU.ui.semResultados) }));
    }

    construirRodape();
    ativarScrollspy();
  }

  render();
  ativarTopo();
})();
