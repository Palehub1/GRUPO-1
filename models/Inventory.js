const {Schema,model} = require('mongoose');

const InventorySchema = Schema({ 
    Serial: {type: String,
        require: true,
        },
    
    Modelo:{type: String,  
        require:true,
     
    },
    Desccripcion:{type: String,
        require:true,
    },
    color:{type: String,
            require:true,     
    },
    foto:{type: String,
        require:true,     
    },
    fechadecompra:{type: Date,
        require:true,     
    },
    Precio:{type: Number,
    require:true,     
    },
    Usuario: {
        type: Schema.Types.ObjectId,
        ref:' User',
        require: false,
    },
    marca:{
        type : Schema.Types.ObjectId,
        ref:' Brand',
        require: true,
    },
    tipoequipo: {
        type: Schema.Types.ObjectId,
        ref:'Devicetype',
        require: true,
    },
    Estadoequipo: {
        type: Schema.Types.ObjectId,
        ref:'Devicestate',
        require: true,
    },
    FechaCreacion: {
        type: Date,
        require: true,
    },
    FechaActualizacion: {
        type: Date,
        require: true,
    },
});
    
    module.exports= model('Inventory', InventorySchema);