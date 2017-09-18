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

class Sale < ApplicationRecord
	belongs_to :wine

	before_save :populate_guid
	validates_uniqueness_of :guid

	private

	def populate_guid
		if new_record?
			while !valid? || self.guid.nil?
				self.guid = SecureRandom.random_number(1_000_000_000).to_s(36)
			end
		end
	end

end
