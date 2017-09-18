# == Schema Information
#
# Table name: sales
#
#  id         :integer          not null, primary key
#  email      :string           not null
#  guid       :string           not null
#  stripe_id  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class SaleTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
