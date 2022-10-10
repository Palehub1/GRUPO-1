const {Schema,model} = require('mongoose');

const BrandSchema = Schema({ 
    Nombre: {type: String,
        require: true,
        },
 
    Estado:{type: String,  
        require:true,
        enum:['Activo',
             'Inactivo']
    },
    FechaCreación:{type: Date,
        require:true,
    },
    FechaActualizacion:{type: Date,
            require:true,     
    }
});
    
    module.exports= model('Brand', BrandSchema);