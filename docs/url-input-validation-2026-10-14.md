## URL input validation

- Trim surrounding whitespace before validation.
- Require a supported URL scheme and a valid host.
- Reject empty input before making a request.
- Distinguish malformed URLs from service/network errors.
- Make copy feedback clear without replacing the original URL unexpectedly.