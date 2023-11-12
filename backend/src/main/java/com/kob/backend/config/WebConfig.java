package com.kob.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                // 配置跨域请求路径
                registry.addMapping("/pk/**")
                        // 允许从8080端口发送跨域请求
                        .allowedOrigins("http://localhost:8080")
                        // 允许的请求方法
                        .allowedMethods("GET", "POST", "PUT", "DELETE")
                        // 允许的请求头
                        .allowedHeaders("*")
                        // 是否发送Cookie
                        .allowCredentials(true);
            }
        };
    }
}
