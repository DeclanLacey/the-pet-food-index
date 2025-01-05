package com.thepetfoodindex.thepetfoodindex.dto;

import lombok.Data;

@Data
public class ErrorDto {
    private String message;

    public ErrorDto(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public static class ErrorDtoBuilder {
        private String message;

        public ErrorDtoBuilder() {
        }

        public ErrorDtoBuilder message(String message) {
            this.message = message;
            return this;
        }

        public ErrorDto build() {
            return new ErrorDto(message);
        }

        @Override
        public String toString() {
            return "ErrorDto.ErrorDtoBuilder(message=" + this.message + ")";
        }
    }

    public static ErrorDtoBuilder builder() {
        return new ErrorDtoBuilder();
    }

}
