const express = require('express');
const {benefByNif, benefByADSE} = require('../data/beneficiarios');

const router = express.Router();

router.get('/beneficiarios', (req, res) =>{
  const {nif} = req.query;

  if(!nif)
    return res.status(200).json({error:'Campos em Falta'});  
  return res.status(200).json({nub:(benefByNif[nif] && benefByNif[nif].adse) || 0});
});


router.get('/documento/:nOrdem', (req, res) => {

  const {dataDocumento, nub, valorTotalFaturado, NrDocPrestador, NrOrdem, NrDevolucaoOriginal, NrPedidoAutorizacao, linhasDocumento} = req.query;
});

router.post('/document', (req, res) => {

});

router.patch('/document', (req, res) => {

});

router.delete('/document', (req, res) => {

}) ;

module.exports = router;