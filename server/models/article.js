const article = (sequelize,DataTypes) =>{

    const Article = sequelize.define('article', {
        text: DataTypes.STRING
    });
   
    Article.associate = models =>{
        Article.belongsTo(models.User);
    };

    return Article;
};

export default article;