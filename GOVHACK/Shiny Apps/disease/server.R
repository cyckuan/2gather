library(shiny)
library(ggplot2)
# Define server logic required to draw a histogram
disease <- read.csv("data/disease.csv")

shinyServer(function(input, output) {
   
  output$distPlot <- renderPlot({
    
    disease$date <- as.Date(disease$date)
    
    ggplot(data=disease, aes(x=date, y=disease_score, group=1)) + 
      xlab("Date") + ylab("Local Disease Score") +
      geom_line(colour="blue", size=1.5) + 
      geom_point(colour="blue", size=4, shape=21, fill="white")
    
  })
  
})
