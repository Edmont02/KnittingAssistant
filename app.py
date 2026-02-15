import webview

if __name__ == "__main__":
    webview.create_window(
        "Knitting Assistant",
        "web/index.html",
    )
    webview.start()
