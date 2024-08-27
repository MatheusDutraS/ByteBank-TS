import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";
import Conta from "../types/Conta.js";
const elementoDataAcesso = document.querySelector(".block-saldo time");
renderizarData();
function renderizarData() {
    if (elementoDataAcesso != null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}
const DataComponent = {
    atulizar: function () {
        renderizarData();
    }
};
export default DataComponent;
