using Microsoft.EntityFrameworkCore;
using Mission14_masfrod2API.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// api connection builder using connection string
builder.Services.AddDbContext<JoelHiltonMovieCollectionContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("MovieDbConnection"))
);

// this allows you to pass data from the API to the react page without it getting blocked
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// used cors and connected with the port for react
app.UseCors(p => p.WithOrigins("http://localhost:3000"));

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();

