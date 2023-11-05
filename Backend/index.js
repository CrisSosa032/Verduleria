import express from "express"
import mysql from "mysql"
import cors from "cors"
import multer from "multer"
import path from "path"


const app = express ()


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"1234",
    database:"verduleria"
})

app.use(express.json())
app.use(cors())


app.get("/", (req,res)=>{
    res.json("Este es el backend")
})


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    }
  });
  
  const upload = multer({ storage });
  
  app.use(express.json());
  app.use(express.static('uploads'));


//PEDIDOS AL BACK DE VERDURAS

app.get('/verduras', (req, res) => {
    db.query('SELECT * FROM verduras', (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las verduras' });
      } else {
        const verdurasConImagenes = results.map((verdura) => {
          return {
            id: verdura.id,
            nombre: verdura.nombre,
            descripcion: verdura.descripcion,
            precio: verdura.precio,
            foto: `http://localhost:8800/${verdura.foto}`,
          };
        });
        res.json(verdurasConImagenes);
      }
    });
  });



app.post('/verduras', upload.single('foto'), (req, res) => {
    const imagenPath = req.file.path;
    const { nombre, descripcion, precio } = req.body;

    const nombreArchivo = path.basename(imagenPath);
  
    // Aquí puedes realizar alguna operación con los datos recibidos, como guardarlos en la base de datos
    const verduras = {
      nombre,
      descripcion,
      precio: parseInt(precio),
      foto: nombreArchivo
    };
  
    db.query('INSERT INTO verduras SET ?', verduras, (error, result) => {
      if (error) {
        console.error('Error al insertar los datos:', error);
        res.status(500).json({ error: 'Error al insertar los datos en la base de datos.' });
      } else {
        console.log('Datos insertados exitosamente.');
        res.json({ message: 'Datos insertados exitosamente.' });
      }
    });
  });


app.delete("/verduras/:id", (req, res)=>{
    const verdurasId = req.params.id;
    const q = "DELETE FROM verduras WHERE id = ?"

    db.query(q,[verdurasId],(err,data)=>{
        if(err) return res.json(err)
        
        return res.json("la verdura ha sido eliminada")
    })
})


app.put('/verduras/:id', upload.single('foto'), (req, res) => {
  const verduraId = req.params.id;
  const { nombre, descripcion, precio } = req.body;
  const imagenPath = req.file ? req.file.path : null;

  const nombreArchivo = path.basename(imagenPath);

  const updatedVerdura = {
    nombre,
    descripcion,
    precio
  };

  if (imagenPath) {
    updatedVerdura.foto = nombreArchivo;
  }

  db.query('UPDATE verduras SET ? WHERE id = ?', [updatedVerdura, verduraId], (error, result) => {
    if (error) {
      console.error('Error al actualizar los datos:', error);
      res.status(500).json({ error: 'Error al actualizar los datos en la base de datos.' });
    } else {
      console.log('Datos actualizados exitosamente.');
      res.json({ message: 'Datos actualizados exitosamente.' });
    }
  });
});








//PEDIDOS AL BACK DE FRUTAS
app.get('/frutas', (req, res) => {
  db.query('SELECT * FROM frutas', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las frutas' });
    } else {
      const frutasConImagenes = results.map((fruta) => {
        return {
          id: fruta.id,
          nombre: fruta.nombre,
          descripcion: fruta.descripcion,
          precio: fruta.precio,
          foto: `http://localhost:8800/${fruta.foto}`,
        };
      });
      res.json(frutasConImagenes);
    }
  });
});



app.post('/frutas', upload.single('foto'), (req, res) => {
  const imagenPath = req.file.path;
  const { nombre, descripcion, precio } = req.body;

  const nombreArchivo = path.basename(imagenPath);

  // Aquí puedes realizar alguna operación con los datos recibidos, como guardarlos en la base de datos
  const frutas = {
    nombre,
    descripcion,
    precio: parseInt(precio),
    foto: nombreArchivo
  };

  db.query('INSERT INTO frutas SET ?', frutas, (error, result) => {
    if (error) {
      console.error('Error al insertar los datos:', error);
      res.status(500).json({ error: 'Error al insertar los datos en la base de datos.' });
    } else {
      console.log('Datos insertados exitosamente.');
      res.json({ message: 'Datos insertados exitosamente.' });
    }
  });
});

app.delete("/frutas/:id", (req, res)=>{
    const frutasId = req.params.id;
    const q = "DELETE FROM frutas WHERE id = ?"

    db.query(q,[frutasId],(err,data)=>{
        if(err) return res.json(err)
        
        return res.json("la verdura ha sido eliminada")
    })
})

app.put('/frutas/:id', upload.single('foto'), (req, res) => {
  const frutaId = req.params.id;
  const { nombre, descripcion, precio } = req.body;
  const imagenPath = req.file ? req.file.path : null;

  const nombreArchivo = path.basename(imagenPath);

  const updatedFruta = {
    nombre,
    descripcion,
    precio
  };

  if (imagenPath) {
    updatedFruta.foto = nombreArchivo;
  }

  db.query('UPDATE frutas SET ? WHERE id = ?', [updatedFruta, frutaId], (error, result) => {
    if (error) {
      console.error('Error al actualizar los datos:', error);
      res.status(500).json({ error: 'Error al actualizar los datos en la base de datos.' });
    } else {
      console.log('Datos actualizados exitosamente.');
      res.json({ message: 'Datos actualizados exitosamente.' });
    }
  });
});





//PEDIDOS AL BACK DE HORTALIZAS
app.get('/hortalizas', (req, res) => {
  db.query('SELECT * FROM hortalizas', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las hortalizas' });
    } else {
      const hortalizasConImagenes = results.map((hortaliza) => {
        return {
          id: hortaliza.id,
          nombre: hortaliza.nombre,
          descripcion: hortaliza.descripcion,
          precio: hortaliza.precio,
          foto: `http://localhost:8800/${hortaliza.foto}`,
        };
      });
      res.json(hortalizasConImagenes);
    }
  });
});



app.post('/hortalizas', upload.single('foto'), (req, res) => {
  const imagenPath = req.file.path;
  const { nombre, descripcion, precio } = req.body;

  const nombreArchivo = path.basename(imagenPath);

  // Aquí puedes realizar alguna operación con los datos recibidos, como guardarlos en la base de datos
  const hortalizas = {
    nombre,
    descripcion,
    precio: parseInt(precio),
    foto: nombreArchivo
  };

  db.query('INSERT INTO hortalizas SET ?', hortalizas, (error, result) => {
    if (error) {
      console.error('Error al insertar los datos:', error);
      res.status(500).json({ error: 'Error al insertar los datos en la base de datos.' });
    } else {
      console.log('Datos insertados exitosamente.');
      res.json({ message: 'Datos insertados exitosamente.' });
    }
  });
});

app.delete("/hortalizas/:id", (req, res)=>{
    const hortalizasId = req.params.id;
    const q = "DELETE FROM hortalizas WHERE id = ?"

    db.query(q,[hortalizaId],(err,data)=>{
        if(err) return res.json(err)
        
        return res.json("la hortaliza ha sido eliminada")
    })
})

app.put('/hortalizas/:id', upload.single('foto'), (req, res) => {
  const hortalizaId = req.params.id;
  const { nombre, descripcion, precio } = req.body;
  const imagenPath = req.file ? req.file.path : null;

  const nombreArchivo = path.basename(imagenPath);

  const updatedHortaliza = {
    nombre,
    descripcion,
    precio
  };

  if (imagenPath) {
    updatedHortaliza.foto = nombreArchivo;
  }

  db.query('UPDATE hortalizas SET ? WHERE id = ?', [updatedHortaliza, hortalizaId], (error, result) => {
    if (error) {
      console.error('Error al actualizar los datos:', error);
      res.status(500).json({ error: 'Error al actualizar los datos en la base de datos.' });
    } else {
      console.log('Datos actualizados exitosamente.');
      res.json({ message: 'Datos actualizados exitosamente.' });
    }
  });
});





//PEDIDOS AL BACK DE POLLO
app.get('/pollos', (req, res) => {
  db.query('SELECT * FROM pollos', (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener las pollos' });
    } else {
      const pollosConImagenes = results.map((pollo) => {
        return {
          id: pollo.id,
          nombre: pollo.nombre,
          descripcion: pollo.descripcion,
          precio: pollo.precio,
          foto: `http://localhost:8800/${pollo.foto}`,
        };
      });
      res.json(pollosConImagenes);
    }
  });
});



app.post('/pollos', upload.single('foto'), (req, res) => {
  const imagenPath = req.file.path;
  const { nombre, descripcion, precio } = req.body;

  const nombreArchivo = path.basename(imagenPath);

  const pollos = {
    nombre,
    descripcion,
    precio: parseInt(precio),
    foto: nombreArchivo
  };

  db.query('INSERT INTO pollos SET ?', pollos, (error, result) => {
    if (error) {
      console.error('Error al insertar los datos:', error);
      res.status(500).json({ error: 'Error al insertar los datos en la base de datos.' });
    } else {
      console.log('Datos insertados exitosamente.');
      res.json({ message: 'Datos insertados exitosamente.' });
    }
  });
});

app.delete("/pollos/:id", (req, res)=>{
    const pollosId = req.params.id;
    const q = "DELETE FROM pollos WHERE id = ?"

    db.query(q,[pollosId],(err,data)=>{
        if(err) return res.json(err)
        
        return res.json("el pollo ha sido eliminado")
    })
})

app.put('/pollos/:id', upload.single('foto'), (req, res) => {
  const polloId = req.params.id;
  const { nombre, descripcion, precio } = req.body;
  const imagenPath = req.file ? req.file.path : null;

  const nombreArchivo = path.basename(imagenPath);

  const updatedPollo = {
    nombre,
    descripcion,
    precio
  };

  if (imagenPath) {
    updatedPollo.foto = nombreArchivo;
  }

  db.query('UPDATE pollos SET ? WHERE id = ?', [updatedPollo, polloId], (error, result) => {
    if (error) {
      console.error('Error al actualizar los datos:', error);
      res.status(500).json({ error: 'Error al actualizar los datos en la base de datos.' });
    } else {
      console.log('Datos actualizados exitosamente.');
      res.json({ message: 'Datos actualizados exitosamente.' });
    }
  });
});





// PEDIDO AL BACK DE CLIENTES

app.get('/clientes', (req, res) => {
  const q = "SELECT * FROM clientes"
  db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
});


app.post("clientes", (req,res) =>{
  const q = "INSERT INTO clientes (`nombre`,`apellido`,`dni`,`tipo`) VALUES (?)"
   const values = [
    req.body.nombre,
    req.body.apellido,
    req.body.dni,
    req.body.tipo,
   ]

   db.query(q, [values], (err, data) =>{
    if (err) return res.json(err);
    return res.json("el cliente ha sido agregado")
   })
})

app.listen(8800, () =>{
    console.log("Conectado al backend!")
})