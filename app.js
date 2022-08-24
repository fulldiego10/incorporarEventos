const carritoCompras = [];
let totalCarrito = 0;
let gabineteElegido;
let fuenteElegido;
let ssdElegido;
let motherElegido;
let procesadorElegido;
let gpuElegido;
let ramElegido;

class Gabinete {
  constructor(modeloGabinete, precioTotal) {
    this.modelo = modeloGabinete;
    this.precio = precioTotal;
  }
}
class Fuente {
  constructor(modeloFuente, precioTotal) {
    this.modelo = modeloFuente;
    this.precio = precioTotal;
  }
}
class Ssd {
  constructor(modeloSsd, precioTotal) {
    this.modelo = modeloSsd;
    this.precio = precioTotal;
  }
}
class Mother {
  constructor(modeloMother, precioTotal) {
    this.modelo = modeloMother;
    this.precio = precioTotal;
  }
}
class Procesador {
  constructor(modeloProce, precioTotal) {
    this.modelo = modeloProce;
    this.precio = precioTotal;
  }
}
class PlacaVideo {
  constructor(modeloGPU, precioTotal) {
    this.modelo = modeloGPU;
    this.precio = precioTotal;
  }
}

class MemRAM {
  constructor(modeloRAM, precioTotal) {
    this.modelo = modeloRAM;
    this.precio = precioTotal;
  }
}

const gabinete_v200 = new Gabinete("gabinete v200", 8000);
const gabinete_aerocool = new Gabinete("gabinete aerocool", 17900);
const gabinete_asus_tuf = new Gabinete("gabinete asus tuf", 39400);

const fuente_750w = new Fuente("fuente gigabyte 750w", 23000);
const fuente_rog = new Fuente("fuente asus rog", 26500);
const fuente_thor = new Fuente("fuente asus thor", 49000);

const solido_WD = new Ssd("ssdM.2WD", 26400);
const solido_adata = new Ssd("ssdM.2adata", 29500);
const solido_Teamforce = new Ssd("ssdM.2teamForce", 50500);

const mother_b550 = new Mother("motherasusb550", 40000);
const mother_x570 = new Mother("motherasusx570", 48500);
const mother_rog550 = new Mother("motherasusrogb550", 52500);
const mother_b560 = new Mother("motherGigabyteB560", 47300);
const mother_mag = new Mother("motherMsiMag", 42500);
const mother_z590 = new Mother("motherasusrogZ590", 66000);

const ryzen5_2600 = new Procesador("r52600", 22000);
const ryzen5_3600 = new Procesador("r53600", 30000);
const ryzen5_5600 = new Procesador("r55600", 45000);
const intel_i3 = new Procesador("intel_i3", 25900);
const intel_i5 = new Procesador("intel_i5", 35000);
const intel_i7 = new Procesador("intel_i7", 58000);

const rx580_8gb = new PlacaVideo("RX580", 100000);
const rx6700_xt = new PlacaVideo("RX6700XT", 250000);
const rx6800_xt = new PlacaVideo("RX6800XT", 400000);
const rtx2060 = new PlacaVideo("RTX2060", 78000);
const rtx3060 = new PlacaVideo("RTX3060", 115000);
const rtx3070ti = new PlacaVideo("RTX3070TI", 197000);

const corsair8_3000 = new MemRAM("Corsair8", 10500);
const hyperX16_3200 = new MemRAM("HyperX16", 14500);
const trident16_3600 = new MemRAM("Trident16", 20000);
const team32_3600 = new MemRAM("TeamForce32", 28500);

let listaGabinete = [gabinete_v200, gabinete_aerocool, gabinete_asus_tuf];
let listaFuente = [fuente_750w, fuente_rog, fuente_thor];
let listaSSD = [solido_WD, solido_adata, solido_Teamforce];
let listaMother = [
  mother_b550,
  mother_x570,
  mother_rog550,
  mother_b560,
  mother_mag,
  mother_z590,
];
let listaCPU = [
  ryzen5_2600,
  ryzen5_3600,
  ryzen5_5600,
  intel_i3,
  intel_i5,
  intel_i7,
];
let listaGPU = [rx580_8gb, rx6700_xt, rx6800_xt, rtx2060, rtx3060, rtx3070ti];
let listaRAM = [corsair8_3000, hyperX16_3200, trident16_3600, team32_3600];

function pedirModGabinete(gabineteSeleccionado) {
  gabineteElegido = listaGabinete.find(
    (gabinete) => gabinete.modelo == gabineteSeleccionado
  );
  actualizarCarrito(gabineteElegido, "Gabinete");
}

function pedirModFuente(fuenteSelecionado) {
  fuenteElegido = listaFuente.find(
    (fuente) => fuente.modelo == fuenteSelecionado
  );
  actualizarCarrito(fuenteElegido);
}

function pedirModSsd(ssdSeleccionado) {
  ssdElegido = listaSSD.find((ssd) => ssd.modelo == ssdSeleccionado);
  actualizarCarrito(ssdElegido);
}

function pedirModMother(motherSeleccionado) {
  motherElegido = listaMother.find(
    (mother) => mother.modelo == motherSeleccionado
  );
  actualizarCarrito(motherElegido);
}

function pedirModProce(cpuSeleccionado) {
  procesadorElegido = listaCPU.find((cpu) => cpu.modelo == cpuSeleccionado);
  actualizarCarrito(procesadorElegido);
}

function pedirModGPU(gpuSeleccionado) {
  gpuElegido = listaGPU.find((gpu) => gpu.modelo == gpuSeleccionado);
  actualizarCarrito(gpuElegido);
}

function pedirModRAM(ramSeleccionado) {
  ramElegido = listaRAM.find((ram) => ram.modelo == ramSeleccionado);
  actualizarCarrito(ramElegido);
}

function actualizarCarrito(producto, tipo) {
  carritoCompras.push(producto);

  console.log(carritoCompras);
}

function calcularCarrito() {
  totalCarrito = 0;
  for (let producto of carritoCompras) {
    totalCarrito = totalCarrito + producto.precio;
  }
  document.getElementById("presupuestoCalculado").innerHTML = totalCarrito;
  console.log(totalCarrito);
}
