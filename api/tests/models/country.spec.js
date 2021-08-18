const { Country, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Country model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Country.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Country.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Country.create({ name: 'Argentina' });
      });
    });
    describe('capital',()=>{
      it('Mostrar un error si la capital es null',(done)=>{
        Country.create({})
        .then(()=>done(new Error ('Se requiere una Capital')))
        .catch(()=>done());
        });
    })
    describe('continente',()=>{
      it('Mostrar un error si la region es null',(done)=>{
        Country.create({})
        .then(()=>done(new Error ('Se requiere una region')))
        .catch(()=>done());
        });
    })
    describe('Imagen',()=>{
      it('Mostrar un error si la imagen de bandera es null',(done)=>{
        Country.create({})
        .then(()=>done(new Error ('Se requiere una imagen de bandera')))
        .catch(()=>done());
        });
    })
  });
});
