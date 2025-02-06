import express from 'express'; // import express
const app = express(); // create express app

let veiculos = [ ] // array de veículos

app.get('/veiculos', (req, res) => { // faz a requisição dos dados dos veículos
    res.json(veiculos) // retorna os dados dos veículos

})

app.get('/veiculos/:placa', (req, res) => {

    const { placa } = req.params; //const da placa pesquisada
    const veiculo = veiculos.find(v => v.placa === placa); //procura o veículo pela placa específica (da const acima)

    if(veiculo) {
        res.json(veiculo); //retorna o veículo encontrado
    }
    else{
        res.status(404).json({message: 'Veículo não encontrado'}); //retorna mensagem de erro
    }

})

app.post('/veiculos', (req, res) => {
    const { placa, marca, modelo, ano } = req.body; //const dos dados do veículo
    const veiculo = { placa, marca, modelo, ano }; //const do veículo
    veiculos.push(veiculo); //adiciona o veículo ao array
    res.status(201).json(veiculo); //retorna o veículo adicionado
})


app.put('/veiculos/:placa', (req, res) => {
    const { placa } = req.params; //const da placa pesquisada
    const { marca, modelo, ano } = req.body; //const dos dados do veículo
    const veiculo = veiculos.find(v => v.placa === placa); //procura o veículo pela placa específica (da const acima)

    if(veiculo) {
        veiculo.marca = marca; //atualiza a marca
        veiculo.modelo = modelo; //atualiza o modelo
        veiculo.ano = ano; //atualiza o ano
        res.json(veiculo); //retorna o veículo atualizado
    }
    else{
        res.status(404).json({message: 'Veículo não encontrado'}); //retorna mensagem de erro
    }
})


app.delete('/veiculos/:placa', (req, res) => {
    const { placa } = req.params; //const da placa pesquisada
    const index = veiculos.findIndex(v => v.placa === placa); //procura o veículo pela placa específica (da const acima)

    if(index === -1) {
        res.status(404).json({message: 'Veículo não encontrado'}); //retorna mensagem de erro
    }
    else{
        veiculos.splice(index, 1); //remove o veículo do array
        res.json({message: 'Veículo removido com sucesso'}); //retorna mensagem de sucesso
    }
})