# Switch 开关

## 技术栈

- HTML5
- CSS3
- JavaScript

## 知识点

1. input 标签中的 **checkbox**
2. css 中的伪元素：**::before** 与 **::after**

## 图片效果：

![](%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202022-03-13%20044855.png)

## 代码：

```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Switch开关</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            font-size: 62.5%;
            box-sizing: border-box;
        }


        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .switch-container {
            position: relative;
            width: 7rem;
            height: 3.6rem;
        }

        .switch {
            display: none;
        }

        .switch-label {
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 2rem;
            cursor: pointer;
            background: rgb(19 19 26);
        }

        .switch-label::before {
            content: '';
            display: inline-block;
            width: 3.6rem;
            height: 3.6rem;
            opacity: 1;
            border-radius: 50%;
            transition: all .5s;
            background: rgb(69 69 88);
        }

        .switch-label::after {
            content: '';
            display: inline-block;
            /* 绝对定位是为了解决父元素宽度不足而导致.switch-label换行的原因 */
            position: absolute;
            top: 0;
            right: 0;
            width: 3.6rem;
            height: 3.6rem;
            opacity: 0;
            border-radius: 50%;
            transition: all .5s;
            background: rgb(69 69 88);
        }

        #switch:checked~.switch-label::before {
            /* 未选中样式消失 */
            opacity: 0;
        }


        #switch:checked~.switch-label::after {
            /* 选中样式显示*/
            opacity: 1;
        }

        /* #switch:checked~.switch-label {
            background: rgb(19 19 26);
        } */


        .content{
            position: relative;
        }

        .div2 {
            transition: all 2s;
            display: none;
        }
    </style>
</head>

<body>

    <div class="root">
        <div class="switch-container">
            <input id="switch" class="switch" type="checkbox">
            <label class="switch-label" for="switch"></label>
        </div>

        <div class="content">
            <div class="div1">
                <h1>关于本站</h1>
                <div>关于本站关于本站关于本站</div>
            </div>
            <div class="div2">
                <h1>关于我</h1>
                <div>关于我关于我关于我</div>
            </div>
        </div>
    </div>

    <script>
        const root = document.querySelector('.root')
        const onSwitch = document.querySelector('.switch')
        const div1 = document.querySelector('.div1')
        const div2 = document.querySelector('.div2')


        onSwitch.onclick = () => {

            if (onSwitch.checked) {
                div1.style.display = "none";
                div2.style.display = "block";

            } else {
                div1.style.display = "block";
                div2.style.display = "none";
            }

            console.log(!onSwitch.checked ? "选中" : "未选中");

        }
    </script>
</body>

</html>

```
