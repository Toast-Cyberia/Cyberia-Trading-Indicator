//CREDITS : Frenchie (@panzerrrrrrr | Discord) 

//@version=6

indicator(title="EMA_MA", shorttitle=" EMA", overlay=true)

 

//ema13

ema13Source = input(defval = close)

ema13Length = input.int(13, minval=1)

 

//ema25

ema25Source = input(defval = close)

ema25Length = input.int(defval = 25, minval = 1)

 

//ema32

ema32Source = input(defval = close)

ema32Length = input.int(defval = 32, minval = 1)

 

//ma100

ma100Source = input(defval = close)

ma100Length = input.int(defval = 100, minval = 1)

 

// ema200 - actually SMMA99

ema200Source = input(defval = close)

ema200Length = input.int(defval = 99, minval=1)

 

//ma300

ma300Source = input(defval = close)

ma300Length = input.int(defval = 300, minval = 1)

 

//Declare EMA

ma100 = ta.sma(ma100Source, ma100Length)

ma300 = ta.sma(ma300Source, ma300Length)

ema13 = ta.ema(ema13Source, ema13Length)

ema25 = ta.ema(ema25Source, ema25Length)

ema32 = ta.ema(ema32Source, ema32Length)

EMA200() =>

    var float ema200 = 0.0

    ema200 := na(ema200[1]) ? ta.sma(ema200Source, ema200Length) : (ema200[1] * (ema200Length - 1) + ema200Source) / ema200Length

    ema200

 

h4ema200 = request.security(syminfo.tickerid, "240", EMA200())

 

//Draw lines

plot(series=ema13, title="EMA13", color=color.new(#6f20ee, 0), linewidth=1)

plot(series=ema25, title="EMA25", color=color.new(#1384e1, 0), linewidth=1, style=plot.style_stepline)

plot(series=ema32, title="EMA32", color=color.new(#ea4e2fef, 0), linewidth=1, style=plot.style_circles)

plot(series=ma100, title="MA100", color=color.new(#47b471d4, 0), linewidth=1, style=plot.style_circles)

plot(series=ma300, title="MA300", color=color.new(#7f47b4, 0), linewidth=1, style=plot.style_cross)

plot(series=EMA200(), title="EMA200", color=color.new(#8d8a8a, 0), linewidth=1, style=plot.style_stepline)

plot(series=h4ema200, title="4hEMA200", color=color.new(#e824ca, 0), linewidth=1)
