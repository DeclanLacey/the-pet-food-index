package com.thepetfoodindex.thepetfoodindex;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"com.thepetfoodindex.thepetfoodindex.mappers"})
public class ThepetfoodindexApplication {


	public static void main(String[] args) {
		SpringApplication.run(ThepetfoodindexApplication.class, args);
	}

	// You will need to figure out how to have a login feature using the mySQL database. So when the people login they
	// can set foods as favorites, and it will save it to their account, you will need a relation of some sort and
	// some new tables

	/// You will want a table that can store the user and their info
	// You will also want a table that will store foods that are favorited, maybe this can be a row in the user table
}
