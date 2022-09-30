class Api::V1::MessagesController < ApplicationController
    before_action :set_message, only: %i[show edit update destroy]
    
    def index
      offset = rand(Message.count)
      message = Message.offset(offset).first
      puts message.inspect
      puts "LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL"
      render json: message
    end

  end