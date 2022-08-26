// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});
// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // defining the third table needed to store foreign keys
  through: {
    model: ProductTag,
    unique: false,
  },
  // defining an alias for when data is retrieved
  as: 'product_of_tag'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // defining the third table needed to store foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // defining an alias for when data is retrieved
  as: 'tag_of_product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
