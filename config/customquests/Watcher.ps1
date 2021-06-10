$Watched = ".\ho.json";
$Dest = ".\Quests.json";
$PrevContents = Get-Content -Path $Watched -Raw;
$CurrentContents = Get-Content -Path $Watched -Raw;
while ($true)
{
    if (Compare-Object $PrevContents $CurrentContents)
    {
        Set-Content -Path $Dest -Value $CurrentContents
        $PrevContents = $CurrentContents;
        Write-Host "Saved Successfully"
    }
    $CurrentContents = Get-Content $Watched;
    Start-Sleep -Milliseconds 100
}

Write-Host "Ended."
