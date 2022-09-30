class Api::V1::MessagesController < ApplicationController
    before_action :set_message, only: %i[show edit update destroy]

    def index
      getrandom = rand(Message.count)
      message = Message.offset(getrandom).first
      puts message.inspect
      render json: message
    end

  end