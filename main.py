def on_button_pressed_a():
    ChoisirN()
input.on_button_pressed(Button.A, on_button_pressed_a)

def ChoisirN():
    global N
    N = randint(0, 999999)

def afficherNombre(num: number):
    led.set_brightness(64)
    basic.show_number(num)
    for index in range(65):
        led.set_brightness(64 - 1 * index)
        basic.pause(1)
    basic.pause(200)

def on_button_pressed_b():
    basic.clear_screen()
    basic.show_number(N)
input.on_button_pressed(Button.B, on_button_pressed_b)

m = 0
cpt = 0
N = 0
led.set_brightness(64)
ChoisirN()

def on_every_interval():
    global cpt, m
    for index in range(5):
        basic.show_icon(IconNames.HEART)
        basic.pause(1000)
        basic.show_icon(IconNames.SMALL_HEART)
        basic.pause(100)
    cpt = 0
    m = 1
    for index2 in range(4):
        basic.show_number(int(N % (m * 10) / m))
        basic.pause(8000)
        m = m * 10
    cpt += 1
    if cpt % 60000 == 0:
        ChoisirN()
        for index3 in range(5):
            basic.show_icon(IconNames.HEART)
            basic.pause(100)
            basic.show_icon(IconNames.SMALL_HEART)
            basic.pause(100)
loops.every_interval(1000, on_every_interval)
