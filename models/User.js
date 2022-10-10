const {Schema,model} = require('mongoose');

const UserSchema = Schema({ 
    Nombre: {type: String,
        require: true,
        },
    Email: {type: String,
            require: true,
            unique: true
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
    
    module.exports= model('User', UserSchema);