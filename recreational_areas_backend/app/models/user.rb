class User < ApplicationRecord
    has_secure_password
    has_many: :recreational_areas

    validates_presence_of :email
    validates_uniqueness_of :email
end