def welcome(you_name):
    if you_name == '':
        result = 'Введите имя'
    else:
        result = (f'Добро пожаловать {you_name}')
        
    return result

def IMT_calculate(height,weight):
    try:
        res = float(weight)/(float(height) **2)
        if weight == "" or height == "":
            result = "Не все данные введены"
            
        if res < 16:
            result = f"Ваш IMT меньше 16 -ти у вас выраженный дефецит массы тела"
            
        if 16 <= res <= 18.5:
            result = f"Ваш IMT = {res}  у вас дефецит массы тела"
            
        if 18.5 < res <= 25:
            result = f"Ваш IMT = {res}  у вас нормальная  масса тела"
            
        if 25 < res <= 30 :
            result = f"Ваш IMT = {res}  у вас предожирение"
            
        if 30 < res <= 35 :
            result = f"Ваш IMT = {res}  у вас ожирение первой степени"
            
        if 35 < res <= 40:
            result = f"Ваш IMT = {res}  у вас ожирение второй степени"
        if  res > 40:
            result = f"Ваш IMT = {res}  у вас ожирение третьей  степени"
            return result
            
    except ValueError:
         print( "Провверьте ввод данных")
    except TypeError:
         print("Неверный тип данных")




def message(name,mess):
    if name == '':
        result = 'Введите имя'
    if mess == '':
        result = 'Невозможно отправить пустое сообщение'
    else:
        result =  f'{name}: {mess}'
        return result
    
print(welcome("Вася"))
print(IMT_calculate(1.35,85))
print(message("Bacя","Привет чат"))