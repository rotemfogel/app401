package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
)

func main() {
	var url = "http://localhost:8088/api/v1/violations"
	if (len(os.Args) > 1) {
		url = os.Args[1]
	}
	fmt.Printf("HTTP GET [%s]\n", url)
	res, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	body, err := ioutil.ReadAll(res.Body)
	res.Body.Close()
	if err != nil {
		log.Fatal(err)
	}
	fmt.Printf("statusCode: %d\n", res.StatusCode)
	fmt.Printf("body: %s\n", body)
}

