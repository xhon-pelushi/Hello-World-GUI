// Hello World GUI in C++ using Qt
// This program animates 'Hello World' moving from left to right in a window.
// To build: qmake && make (requires Qt5 or Qt6)

#include <QApplication>
#include <QWidget>
#include <QPainter>
#include <QTimer>
#include <QString>

class HelloWorldWidget : public QWidget {
    Q_OBJECT
public:
    HelloWorldWidget(QWidget *parent = nullptr) : QWidget(parent), x(0) {
        setFixedSize(400, 100);
        timer = new QTimer(this);
        connect(timer, &QTimer::timeout, this, &HelloWorldWidget::moveText);
        timer->start(10); // update every 10ms for smooth animation
    }
protected:
    void paintEvent(QPaintEvent *) override {
        QPainter painter(this);
        painter.setFont(QFont("Arial", 24));
        painter.drawText(x, 60, "Hello World");
    }
private slots:
    void moveText() {
        x += 2;
        if (x > width()) x = -100; // reset when out of window
        update();
    }
private:
    int x;
    QTimer *timer;
};

int main(int argc, char *argv[]) {
    QApplication app(argc, argv);
    HelloWorldWidget window;
    window.show();
    return app.exec();
}

#include "main.moc"
