class Product < ApplicationRecord
  has_many :line_items
  belongs_to :orders, :through => :line_items
end
