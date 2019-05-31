const types = {
  'com': 'yo soy .com',
  'net': 'yo soy .net'
}

const ruta = 'archivos/root/google.net'

let extencion = ruta.split('.')

console.log(extencion)
console.log(extencion[1])

let type = types[extencion[1]]

console.log(type)
