package me.rotemfo;

import org.asynchttpclient.AsyncHttpClient;
import org.asynchttpclient.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;

import static org.asynchttpclient.Dsl.asyncHttpClient;

/**
 * Hello world!
 */
public class App {
    private final static String URL = "https://api.upstreamsecurity.io/api/v1/violations";
    private static final Logger logger = LoggerFactory.getLogger(App.class);
    public static void main(String[] args) throws Exception {
        AsyncHttpClient asyncHttpClient = asyncHttpClient();
        String url = URL;
        if (args.length > 0) url = args[0];

        logger.info("HTTP GET: [{}]", url);
        Future<Response> whenResponse = asyncHttpClient.prepareGet(url).execute();
        Response res = null;
        try {
            res = whenResponse.get(1000, TimeUnit.MILLISECONDS);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        if (res != null) {
            logger.info("statusCode: {}", res.getStatusCode());
            logger.info("body: {}", res.getResponseBody());
        }
        asyncHttpClient.close();
    }
}