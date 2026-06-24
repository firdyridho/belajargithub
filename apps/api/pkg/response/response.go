package response

type body struct {
	Success bool   `json:"success"`
	Message string `json:"message"`
	Data    any    `json:"data,omitempty"`
}

func OK(message string, data any) body {
	return body{Success: true, Message: message, Data: data}
}

func Error(message string) body {
	return body{Success: false, Message: message}
}
