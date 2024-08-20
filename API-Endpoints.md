## API Endpoints

Here are the key API endpoints available in this project:

**Note**: For more extensive details on each route, visit the [API Documentation](https://menu-management-api-u1ds.onrender.com/api-docs/#/)

### API Routes

#### Healthcheck

  - GET /api/v1/healthcheck

#### Hello

  - GET /api/v1/hello

### Categories

#### Create a Category

  - POST /api/v1/categories
  - Attributes: name, image, description, taxApplicability, tax, taxType

#### Get All Categories

  - GET /api/v1/categories

#### Get a Category by ID

  - GET /api/v1/categories?id=:id&name=:name

#### Update a Category

  - PATCH /api/v1/categories/:id


### Subcategories

#### Create a Subcategory

  - POST /api/v1/categories/:category_id/sub-categories
  - Attributes: name, image, description, taxApplicability, tax

#### Get All Subcategories

  - GET /api/v1/sub-categories/all

#### Get Subcategories by Category

  - GET /api/v1/categories/:category_id/sub-categories

#### Get a Subcategory by ID

  - GET /api/v1/sub-categories?id=:id&name=:name

#### Update a Subcategory

  - PATCH /api/v1/categories/:category_id/sub-categories/:id

### Items

#### Create an Item under Category

  - POST /api/v1/categories/:category_id/items
  - Attributes: name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount

#### Create an Item under Sub Category

  - POST /api/v1/sub-categories/:sub_category_id/items
  - Attributes: name, image, description, taxApplicability, tax, baseAmount, discount, totalAmount

#### Get All Items

  - GET /api/v1/items/all

#### Get Items by Category

  - GET /api/v1/categories/:category_id/items

#### Get Items by Subcategory

  - GET /api/v1/sub-categories/:sub_category_id/items

#### Get an Item by ID

  - GET /api/v1/items?id=:id&name=:name

#### Update an Item under Category

  - PUT /api/v1/categories/:category_id/items/:id

#### Update an Item under Sub Category

  - PUT /api/v1/sub-categories/:sub_category_id/items/:id

### Search

#### Search Items by Name

  - GET /api/v1/items/search?name=:name