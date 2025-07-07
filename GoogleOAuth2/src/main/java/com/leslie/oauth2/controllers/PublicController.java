package com.leslie.oauth2.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.leslie.oauth2.dtos.MessageDto;

@RestController
public class PublicController {
	
	@GetMapping("/public/messages")
	public ResponseEntity<MessageDto> publicMessages() {
		return ResponseEntity.ok(new MessageDto("public content"));
	}

}
