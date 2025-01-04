package com.thepetfoodindex.thepetfoodindex.config;

import com.thepetfoodindex.thepetfoodindex.dto.ErrorDto;
import com.thepetfoodindex.thepetfoodindex.util.AppException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExceptionHandler {

    @ExceptionHandler(value = { AppException.class })
    @ResponseBody
    public ResponseEntity<ErrorDto> handleException(AppException ex) {
        return ResponseEntity
                .status(ex.getCode())
                .body(ErrorDto.builder().message(ex.getMessage()).build());
    }
}
