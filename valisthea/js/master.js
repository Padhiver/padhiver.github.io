/* =========================================================
   Valisthéa — mode maître : indicateur, fenêtre de passphrase.
   Partagé entre la page principale et la carte. Ne gère pas
   le bouton "Public"/"Maître" lui-même (chaque page a sa
   propre délégation de clic pour data-mode), seulement ce qui
   se passe une fois qu'on ouvre/ferme la fenêtre.
   ========================================================= */

const EanaMaster = (() => {
  let masterRoot = null;
  let gateRoot = null;
  let onChange = () => {};

  function init(mRoot, gRoot, onMasterChange) {
    masterRoot = mRoot;
    gateRoot = gRoot;
    onChange = onMasterChange || (() => {});
  }

  function renderIndicator() {
    masterRoot.innerHTML = EanaData.isMasterActive() ? EanaRender.masterIndicator() : "";
    const indicator = document.getElementById("master-indicator");
    if (indicator) {
      indicator.addEventListener("click", () => {
        EanaData.deactivateMaster();
        renderIndicator();
        onChange();
      });
    }
  }

  function closeGate() {
    gateRoot.innerHTML = "";
  }

  function openGate() {
    gateRoot.innerHTML = EanaRender.gate();
    const pass = document.getElementById("gate-pass");
    const error = document.getElementById("gate-error");
    const ok = document.getElementById("gate-ok");

    gateRoot.querySelectorAll("[data-gate-close]").forEach((b) => b.addEventListener("click", closeGate));

    async function submit() {
      const granted = await EanaData.tryActivateMaster(pass.value);
      if (granted) {
        closeGate();
        renderIndicator();
        onChange();
      } else {
        error.hidden = false;
        pass.select();
      }
    }

    ok.addEventListener("click", submit);
    pass.addEventListener("keydown", (e) => {
      if (e.key === "Enter") submit();
      if (e.key === "Escape") closeGate();
    });
    pass.focus();
  }

  function isGateOpen() {
    return !!document.getElementById("gate");
  }

  return { init, renderIndicator, openGate, closeGate, isGateOpen };
})();
