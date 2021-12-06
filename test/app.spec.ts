import request from 'supertest';

const baseUrl = "http://127.0.0.1:4000";

const objectMock = {
	a:{
		habitaciones:4,
		bannos:2,
		estacionamientos:1,
		metros_cuadrados:145,
		precio:500000,
		img:"/img/inmobiliarias/casa.png",
		tipo_propiedad:1,
		propietario:3,
		disponible:1
	},
	b:{
		habitaciones:5,
		bannos:3,
		estacionamientos:2,
		metros_cuadrados:145,
		precio:580000,
		img:"/img/inm/ca.png",
		tipo_propiedad:0,
		propietario:6,
		disponible:1
	}
	
}

//POST
describe('Check POST Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
            .post('/propiedades/nv/')
			.send(objectMock.a)
			.send(objectMock.b)
        expect(response.status).toBe(200);
	});
})

//GET
describe('Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
            .get('/propiedades/');
        expect(response.status).toBe(200);
	});
})

describe('Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
            .get('/propiedades/tp/1');
        expect(response.status).toBe(200);
	});
})

describe('Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
            .get('/propiedades/hab/5');
        expect(response.status).toBe(200);
	});
})

describe('Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
            .get('/propiedades/ba/2');
        expect(response.status).toBe(200);
	});
})

describe('Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
            .get('/propiedades/est/1');
        expect(response.status).toBe(200);
	});
})

describe('Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
            .get('/propiedades/mt/145');
        expect(response.status).toBe(200);
	});
})

describe('Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
            .get('/propiedades/pre/100000&800000');
        expect(response.status).toBe(200);
	});
})

describe('Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const response = await request(baseUrl)
            .get('/propiedades/pro/6');
        expect(response.status).toBe(200);
	});
})

//PUT
describe('Status 200 endpoint', () => {
	it('should return a 200 status code', async () => {
		const newObjt = {
			habitaciones:5,
			bannos:4,
			estacionamientos:2,
			metros_cuadrados:145,
			precio:680000,
			img:"/img/inm/ca.png",
			tipo_propiedad:0,
			propietario:7,
			disponible:1
		}
		const response = await request(baseUrl)
            .put('/propiedades/upd/6')
			.send(newObjt)
        expect(response.status).toBe(200);
	});
})

