package com.leslie.oauth2.config;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import org.springframework.security.oauth2.core.OAuth2AuthenticatedPrincipal;
import org.springframework.security.oauth2.server.resource.introspection.OAuth2IntrospectionAuthenticatedPrincipal;
import org.springframework.security.oauth2.server.resource.introspection.OpaqueTokenIntrospector;
import org.springframework.web.reactive.function.client.WebClient;

import com.leslie.oauth2.dtos.UserInfo;

public class GoogleOpaqueTokenIntrospector implements OpaqueTokenIntrospector {

	private final WebClient userInfoClient;
	
	public GoogleOpaqueTokenIntrospector(WebClient userInfoClient) {
		this.userInfoClient = userInfoClient;
	}
	
	@Override
	public OAuth2AuthenticatedPrincipal introspect(String token) {
		UserInfo user = userInfoClient.get()
			.uri(uriBuilder -> uriBuilder.path("/oauth2/v3/userinfo").queryParam("access_token", token).build())
			.retrieve()
			.bodyToMono(UserInfo.class)
			.block();
			
		Map<String, Object> attributes = new HashMap<>();
		attributes.put("sub", user.sub());
		attributes.put("name", user.name());
		return new OAuth2IntrospectionAuthenticatedPrincipal(user.name(), attributes, null);
	}

}
