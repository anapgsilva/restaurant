User.destroy_all
u1 = User.create :name => 'Ana', :password => 'chicken', :admin => true
u2 = User.create :name => 'Kait', :password => 'chicken', :admin => true
u3 = User.create :name => 'Kian', :password => 'chicken', :admin => true
u4 = User.create :name => 'Eva', :password => 'chicken', :admin => false
puts "#{ User.count } users created"

# Order.destroy_all
# o1 = Order.create :total_price => 12.50, :user_id => u1.id
# o2 = Order.create :total_price => 25.50, :user_id => u4.id
# o3 = Order.create :total_price => 18.00, :user_id => u1.id
# puts "#{ Order.count } orders created"

LineItem.destroy_all
l1 = LineItem.create :quantity => , :product_id =>
l1 = LineItem.create :quantity => , :product_id =>
l1 = LineItem.create :quantity => , :product_id =>
puts "#{ LineItem.count } line_items created"


Product.destroy_all
p1 = Product.create :name => , :category => , :price => , :image =>
p2 = Product.create :name => , :category => , :price => , :image =>
p3 = Product.create :name => , :category => , :price => , :image =>
puts "#{ Product.count } products created"
