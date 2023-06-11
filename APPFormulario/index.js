const { Client } = require("pg");

const obtenerIdentificacion = async () => {
    const client = new Client({
        user: "postgres",
        host: "127.0.0.1",
        database: "desarrollo",
        password: "admin",
        port: 5432
    });
    await client.connect();
    const res = await client.query("SELECT * FROM identificacion");
    const result = res.rows;
    await client.end();
    return result;
};

obtenerIdentificacion().then((result) => { 
    console.log(result);
}); 