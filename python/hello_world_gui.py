import tkinter as tk

class HelloWorldGUI:
    def __init__(self, root):
        self.root = root
        self.root.title("Hello World GUI - Python")
        self.canvas = tk.Canvas(root, width=400, height=100)
        self.canvas.pack()
        self.text = self.canvas.create_text(0, 50, text="Hello World", anchor='w', font=('Arial', 24))
        self.dx = 2
        self.animate()

    def animate(self):
        x, y = self.canvas.coords(self.text)
        if x < 400:
            self.canvas.move(self.text, self.dx, 0)
        else:
            self.canvas.coords(self.text, 0, 50)
        self.root.after(20, self.animate)

if __name__ == "__main__":
    root = tk.Tk()
    app = HelloWorldGUI(root)
    root.mainloop()
