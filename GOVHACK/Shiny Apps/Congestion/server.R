
library(shiny)
library(ggplot2)
# Define server logic required to draw a histogram
congestion_final <- read.csv("data/congestion.csv")

shinyServer(function(input, output) {
  
  output$distPlot <- renderPlot({
    
    #ggplot(data=congestion_final, aes(x= day, y= bus_congestion, group=1, colour = "blue")) + 
    #  geom_line(aes(x = day, y = train_congestion, colour = "red"), size = 1.5) + 
    #  geom_point(colour = "red", size = 4, shape = 21, fill = "white") +
    #  xlab("Date") + ylab("Congestion Level") +
    #  geom_line(colour="blue", size=1.5) + 
    #  geom_point(colour="blue", size=4, shape=21, fill="white")
  
    ggplot(data = congestion_final, aes(day))+
      xlab("Date") + ylab("Congestion Level") +
      geom_line(aes(y = train_congestion), size = 1.5, colour = "red")+
      geom_line(aes(y = bus_congestion), size = 1.5, colour = "blue")
    
    
  })
  
})
