const User = require('./User');

User.hasMany(Post, {
    foreignKey: 'user_id'
}); 
