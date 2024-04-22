FROM grafana/xk6 as builder

# Build k6 with the xk6-cognito extension
RUN xk6 build --with github.com/grafana/xk6-output-influxdb@v0.4.2 && \
    cp k6 $GOPATH/bin/k6

# Use Alpine as the final image
FROM alpine:3.13

# Install CA certificates and create a non-root user
RUN apk add --no-cache ca-certificates && \
    adduser -D -u 12345 -g 12345 k6

# Copy the k6 binary from the builder stage
COPY --from=builder /go/bin/k6 /usr/bin/k6
COPY --from=kvij/scuttle:latest scuttle /usr/bin/scuttle

# Set the user to run the container
USER 12345

# Set the entrypoint to k6
ENTRYPOINT ["scuttle", "k6"]
