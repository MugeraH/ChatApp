using ChatService;
using ChatService.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();
builder.Services.AddCors();

builder.Services.AddSingleton<IDictionary<string, UserConnection>>(opts => new Dictionary<string, UserConnection>());


var app = builder.Build();
app.UseRouting();

app.UseCors(
  o => o.WithOrigins("http://localhost:3000").AllowAnyMethod().AllowAnyHeader().AllowCredentials()
      );


app.MapGet("/", () => "Hello World!");



app.UseEndpoints(endpoints => {
    endpoints.MapHub<ChatHub>("/chat");
});


app.Run();



