package com.thepetfoodindex.thepetfoodindex.mappers;

import com.thepetfoodindex.thepetfoodindex.dto.SignUpDto;
import com.thepetfoodindex.thepetfoodindex.dto.UserDto;
import com.thepetfoodindex.thepetfoodindex.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto userDto);
}
