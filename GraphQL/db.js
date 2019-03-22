module.exports = {
  beneficiarios: {benefByADSE:{
    '123123123':{
      nome:'Teste1',
      nif:'232123333',
      localidade:'Braga',
      ativo:true,
    },
    '434312088':{
      nome:'Teste2',
      nif:'132153234',
      localidade:'Braga',
      ativo:false,
    },
  },
  benefByNif:{
    '232123333':{
      nome:'Teste1',
      adse:'123123123',
      localidade:'Braga',
      ativo:true,
    },
    '132153234':{
      nome:'Teste2',
      adse:'434312088',
      localidade:'Braga',
      ativo:false,
    },
  },
  allADSE:[123123123, 123123123],
  allNIF:[232123333, 132153234]
  },
  prestadores:{
    prestadoresByID:{
      '1':'213832123',
      '2':'23231231'
    },
    prestadoresByNif:{
      '213832123':{
        id:1,
        name: 'CHP',
        password: 'chp',
        allIDsLocais:[11, 23],
        locaisByID:{
          11:{
            name:'CMIN',
            password:'CMIN',
          },
          23:{
            name:'CentroQ',
            password:'CentroQ'
          }
        }
      },
      '23231231':{
        id:2,
        name:'Hospital de Braga',
        password: 'hb',
        allIDsLocais:[],
        locaisByID:{}
      }
    },
    allIDs:['213832123', '23231231']
  },
};