User.destroy_all
p "Creating users"
u1 = User.create :name => 'Ana', :email => "ana@ga", :password => 'chicken', :admin => true
u2 = User.create :name => 'Kait', :email => "kait@ga", :password => 'chicken', :admin => true
u3 = User.create :name => 'Kian', :email => "kian@ga", :password => 'chicken', :admin => true
u4 = User.create :name => 'Eva', :email => "eva@ga", :password => 'chicken', :admin => false
puts "There are #{ User.count } users"

Product.destroy_all
p "Creating products"
p1 = Product.create :name => "Garlic Bread" , :category => "Starter", :price => 5.50, :image => ""
p2 = Product.create :name => "Traditional Bruschetta", :category => "Starter", :price => 10.90, :image => ""
p3 = Product.create :name => "Arancini Pomodoro", :category => "Starter", :price => 15.90, :image => ""
p4 = Product.create :name => "Garlic Prawns", :category => "Starter", :price => 18.90, :image => ""
p5 = Product.create :name => "Calamari Fritti", :category => "Starter", :price => 15.50, :image => ""
p6 = Product.create :name => "Arrabiata", :category => "Pasta", :price => 18.90, :image => ""
p7 = Product.create :name => "Puttanesca", :category => "Pasta", :price => 18.90, :image => ""
p8 = Product.create :name => "Napolitana", :category => "Pasta", :price => 18.90, :image => ""
p9 = Product.create :name => "Pesto", :category => "Pasta", :price => 18.90, :image => ""
p10 = Product.create :name => "Bolognese", :category => "Pasta", :price => 18.90, :image => ""
p11 = Product.create :name => "Carbonara", :category => "Pasta", :price => 18.90, :image => ""
p12 = Product.create :name => "Marinara", :category => "Pasta", :price => 23.90, :image => ""
p13 = Product.create :name => "Lasagne", :category => "Pasta", :price => 18.90, :image => ""
p14 = Product.create :name => "Chicken Cacciatore", :category => "Main", :price => 24.90, :image => ""
p15 = Product.create :name => "Chicken Funghi", :category => "Main", :price => 24.90, :image => ""
p16 = Product.create :name => "Veal Marsala", :category => "Main", :price => 24.90, :image => ""
p17 = Product.create :name => "Veal Boscaiola", :category => "Main", :price => 24.90, :image => ""
p18 = Product.create :name => "Grain Fed Sirloin", :category => "Main", :price => 29.90, :image => ""
p19 = Product.create :name => "Wagyu", :category => "Main", :price => 29.90, :image => ""
p20 = Product.create :name => 'Margherita', :category => "Pizza", :price => 18, :image => ""
p21 = Product.create :name => 'Napoletana', :category => "Pizza", :price => 18, :image => ""
p22 = Product.create :name => 'Tropical', :category => "Pizza", :price => 18, :image => ""
p23 = Product.create :name => 'Capriccosa', :category => "Pizza", :price => 18.50, :image => ""
p24 = Product.create :name => 'Pepperoni', :category => "Pizza", :price => 18, :image => ""
p25 = Product.create :name => 'Seafood', :category => "Pizza", :price => 19.90, :image => ""
p26 = Product.create :name => 'Vegetarian', :category => "Pizza", :price => 18, :image => ""
p27 = Product.create :name => 'Supreme', :category => "Pizza", :price => 22, :image => ""
p28 = Product.create :name => 'Tiramisu', :category => "Dessert", :price => 10.90, :image => ""
p29 = Product.create :name => 'Vanilla Pannacotta', :category => "Dessert", :price => 9, :image => ""
p30 = Product.create :name => "Belgium Chocolate Mousse", :category => "Dessert", :price => 9, :image => ""
p31 = Product.create :name => 'Cheesecake', :category => "Dessert", :price => 10.90, :image => ""
p32 = Product.create :name => 'Chocolate Mud Cake', :category => "Dessert", :price => 10.90, :image => ""
p33 = Product.create :name => 'Nutella Pizza', :category => "Dessert", :price => 10, :image => ""
puts "There are #{ Product.count } products"


Order.destroy_all
p "Creating orders"
o1 = Order.create :total_price => 71.10, :user_id => u1.id, :type => "Pick-up"
o2 = Order.create :total_price => 91.40, :user_id => u4.id, :type => "Delivery"
o3 = Order.create :total_price => 65.80, :user_id => u1.id, :type => "Pick-up"
o4 = Order.create :total_price => 40.00, :user_id => u2.id, :type => "Pick-up"
o5 = Order.create :total_price => 56.7, :user_id => u3.id, :type => "Delivery"
puts "There are #{ Order.count } orders"

LineItem.destroy_all
puts "Creating line items"
l1 = LineItem.create :quantity => 1, :product_id => p1.id
l2 = LineItem.create :quantity => 1, :product_id => p6.id
l3 = LineItem.create :quantity => 1, :product_id => p17.id
l4 = LineItem.create :quantity => 2, :product_id => p32.id
l5 = LineItem.create :quantity => 1, :product_id => p2.id
l6 = LineItem.create :quantity => 1, :product_id => p3.id
l7 = LineItem.create :quantity => 2, :product_id => p11.id
l8 = LineItem.create :quantity => 2, :product_id => p28.id
l9 = LineItem.create :quantity => 1, :product_id => p13.id
l10 = LineItem.create :quantity => 1, :product_id => p16.id
l11 = LineItem.create :quantity => 1, :product_id => p27.id
l12 = LineItem.create :quantity => 1, :product_id => p24.id
l13 = LineItem.create :quantity => 1, :product_id => p27.id
l14 = LineItem.create :quantity => 1, :product_id => p2.id
l15 = LineItem.create :quantity => 1, :product_id => p19.id
l16 = LineItem.create :quantity => 1, :product_id => p31.id
puts "There are #{ LineItem.count } line_items"


puts "line_items into order"

o1.line_items << l1 << l2 << l3 << l4
o2.line_items << l5 << l6 << l7 << l8
o3.line_items << l9 << l10 << l11
o4.line_items << l12 << l13
o5.line_items << l14 << l15 << l16
