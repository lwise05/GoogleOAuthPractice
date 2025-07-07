package com.leslie.oauth2.dtos;

public record UserInfo (
		String sub,
		String name,
		String givenName,
		String familyName,
		String picture,
		String email,
		boolean emailVerified,
		String locale) {

}
